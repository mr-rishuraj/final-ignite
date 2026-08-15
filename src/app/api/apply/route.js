import { createServerClient } from '@/lib/supabaseServer';

export async function POST(request) {
  try {
    const supabase = createServerClient();
    const formData = await request.formData();

    const founderName   = formData.get('founderName')?.trim()  ?? '';
    const email         = formData.get('email')?.trim()        ?? '';
    const phone         = formData.get('phone')?.trim()        || null;
    const startupName   = formData.get('startupName')?.trim()  ?? '';
    const stage         = formData.get('stage')                ?? '';
    const sector        = formData.get('sector')               ?? '';
    const website       = formData.get('website')?.trim()      || null;
    const oneLiner      = formData.get('oneLiner')?.trim()     ?? '';
    const source        = formData.get('source')               || null;
    const pitchDeckFile = formData.get('pitchDeck');

    if (!founderName || !email || !startupName || !stage || !sector || !oneLiner) {
      return Response.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    let pitchDeckUrl = null;

    if (pitchDeckFile && pitchDeckFile.size > 0) {
      const bytes    = await pitchDeckFile.arrayBuffer();
      const buffer   = Buffer.from(bytes);
      const fileName = `${Date.now()}-${pitchDeckFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;

      const { error: uploadError } = await supabase.storage
        .from('pitch-decks')
        .upload(fileName, buffer, { contentType: 'application/pdf', upsert: false });

      if (uploadError) {
        console.error('Storage upload error:', uploadError.message);
        return Response.json({ error: `Pitch deck upload failed: ${uploadError.message}` }, { status: 500 });
      }

      const { data: urlData } = supabase.storage
        .from('pitch-decks')
        .getPublicUrl(fileName);

      pitchDeckUrl = urlData.publicUrl;
    }

    const { error: dbError } = await supabase.from('applications').insert({
      founder_name:   founderName,
      email,
      phone,
      startup_name:   startupName,
      stage,
      sector,
      website,
      one_liner:      oneLiner,
      pitch_deck_url: pitchDeckUrl,
      source,
    });

    if (dbError) {
      console.error('DB insert error:', dbError.message);
      return Response.json({ error: `Database error: ${dbError.message}` }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Unhandled error in /api/apply:', err);
    return Response.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
