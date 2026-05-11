import { isSupabaseConfigured, supabase, type Contact } from '../supabase';

export async function submitContact(contact: Omit<Contact, 'id' | 'created_at' | 'status'>): Promise<Contact | null> {
  if (!isSupabaseConfigured) {
    console.error('Supabase is not configured. Contact submission was skipped.');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert({
        name: contact.name,
        email: contact.email,
        message: contact.message,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Error submitting contact form:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error submitting contact form:', error);
    return null;
  }
}
