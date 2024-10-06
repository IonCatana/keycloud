import i18n from "i18next"; // Importo i18next per gestire le traduzioni nell'applicazione
import { initReactI18next } from "react-i18next"; // Importo il binding per React

// Recupera la lingua dal localStorage o usa "en" come fallback
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next) // Utilizzo il plugin initReactI18next per integrare i18next con React
  .init({
    fallbackLng: "en", // Definisco la lingua di default (fallback) come inglese
    lng: savedLanguage,
    supportedLngs: ["en", "it"], // Elenco delle lingue supportate nell'app (inglese e italiano)
    // debug: true, // (Commentato) Abilita il debug per vedere eventuali problemi di configurazione nella console
    interpolation: {
      escapeValue: false, // Evita di fare l'escape dei valori, poiché React gestisce già la sicurezza del contenuto
    },
    resources: {
      // Risorse di traduzione per le lingue supportate (inglese e italiano)
      en: {
        translation: {
          confirm_delete: "Confirm Delete",
          confirm_delete_message:
            "Are you sure you want to delete the generated link?",
          cancel: "Cancel",
          delete: "Delete",
          active: "Active",
          inactive: "Inactive",
          expired: "Expired",
          period: "Period",
          language: "Language",
          dark_mode: "Dark Mode",
          light_mode: "Light Mode",
          user_profile: "User Profile",
          english: "English",
          italian: "Italiano",
          dashboard: "Dashboard",
          apartments: "Apartments",
          no_apartments_message:
            "No apartments available. Add a new apartment!",
          pricing_plans: "Pricing Plans",
          our_pricing_plans: "Our Pricing Plans",
          basic_plan: "Basic",
          basic_plan_description: "Ideal for managing up to 4 apartments",
          medium_plan: "Medium",
          medium_plan_description: "Ideal for managing up to 8 apartments",
          premium_plan: "Premium",
          premium_plan_description: "Ideal for managing up to 20 apartments",
          choose_plan: "Choose Plan",
          month: "month",
          add_apartment: "Add Apartment",
          street: "Street",
          number: "Number",
          city: "City",
          floor_staircase: "Floor/Staircase",
          postal_code: "Postal Code",
          prefix: "Prefix",
          phone: "Phone",
          edit_apartment: "Edit Apartment",
          link_duration: "Link Duration",
          fixed_link: "Fixed Link",
          select_period: "Select Period",
          generate: "Generate",
          save: "Save",
          edit: "Edit",
          delete_apartment: "Delete Apartment",
          cannot_generate_again: "Cannot generate again",
          name: "Name",
          surname: "Surname",
          email_address: "Email Address",
          verify_email: "Verifying email...",
          change_email: "Change Email",
          error_email_change:
            "You must choose another email, email already in use, try again!",
          verify_email_sent: "Verification email sent. Check your inbox!",
          success_email_changed: "Email verified successfully!",
          success_profile_updated: "Profile updated successfully!",
          error_profile_update: "Error updating profile, try again!",
          profile: "Profile",
          billing: "Billing",
          password: "Password",
          notification: "Info",
          warning: "Warning",
          ok: "OK",
          email_already_sent:
            "You have already made the request for this email. Email already sent",
          success_recovery_email: "Email sent. Check your inbox.",
          error_recovery_email: "Error sending email, try again!",
          back_to_sign_in: "Back to Sign-In",
          recover_email: "Recover Password",
          send_recovery_email: "Send recovery email",
          invalid_email_format: "Invalid email format",
          email_required: "Email is required",
          passwords_do_not_match: "Passwords do not match",
          password_reset_success: "Password reset successfully!",
          error_reset_password: "Error resetting password, try again!",
          reset_password: "Reset Password",
          confirm_password: "Confirm Password",
          new_password: "New Password",
          reset_link_expired: "Reset link expired. Please request a new one.",
          logout: "Logout",
          current_password: "Current Password",
          new_password_again: "Repeat New Password",
          two_factor_auth_title: "Two-Factor Authentication Settings (MFA)",
          two_factor_auth_description:
            "Enable two-factor authentication to increase the security of your account.",
          enable_mfa_button: "Enable MFA",
          qr_code_success:
            "QR Code generated successfully! Scan the code with your authentication app.",
          mfa_code_label: "MFA Code",
          verify_mfa_button: "Verify MFA",
          mfa_verified_success: "MFA successfully verified!",
          mfa_verify_error:
            "Error verifying MFA code. Please check the code entered.",
          mfa_setup_error:
            "Error enabling MFA. Please check your connection and try again.",
          mfa_verification_error:
            "Error verifying MFA code. Please check the code and try again.",
          disabled_mfa_label: "MFA Disabled",
          mfa_disabled_success: "MFA disabled successfully!",
          enabled_mfa_label: "MFA Enabled",
          signin_title: "Sign In",
          email_label: "Email",
          password_label: "Password",
          forgot_password: "Forgot your password?",
          recover_password: "Recover password",
          signin_button: "Sign In",
          no_account: "Don't have an account?",
          signup_link: "Sign Up",
          signin_error: "Error during sign in. Please try again.",
          signup_title: "Sign Up",
          name_label: "Name",
          surname_label: "Surname",
          signup_button: "Sign Up",
          already_have_account: "Already have an account?",
          signin_link: "Sign In",
          actual_password_notsame: "The current password is not correct",
          new_passwords_not_match: "The new passwords do not match",
          error_retrieving_profile_data: "Error retrieving profile data",
          signin_success: "Sign in successful!",
          welcome: "Welcome Back",
          signup_success: "Sign up successful!",
          signup_success_title: "Registration Completed",
          linkCopied: "Link copied",
        },
      },
      it: {
        translation: {
          confirm_delete: "Conferma eliminazione",
          confirm_delete_message:
            "Sei sicuro di voler eliminare il link generato?",
          cancel: "Annulla",
          delete: "Elimina",
          active: "Attivo",
          inactive: "Inattivo",
          expired: "Scaduto",
          period: "Periodo",
          language: "Lingua",
          dark_mode: "Modalità Scura",
          light_mode: "Modalità Chiara",
          user_profile: "Profilo Utente",
          english: "Inglese",
          italian: "Italiano",
          dashboard: "Dashboard",
          apartments: "Appartamenti",
          no_apartments_message:
            "Non ci sono appartamenti disponibili. Aggiungi un nuovo appartamento!",
          pricing_plans: "Piani di Pagamento",
          our_pricing_plans: "I nostri piani tariffari",
          basic_plan: "Base",
          basic_plan_description: "Ideale per gestire fino a 4 appartamenti",
          medium_plan: "Medio",
          medium_plan_description: "Ideale per gestire fino a 8 appartamenti",
          premium_plan: "Premium",
          premium_plan_description: "Ideale per gestire fino a 20 appartamenti",
          choose_plan: "Scegli il piano",
          month: "mese",
          add_apartment: "Aggiungi Appartamento",
          street: "Via",
          number: "N*",
          city: "Città",
          floor_staircase: "Piano/scala",
          postal_code: "Codice postale",
          prefix: "Pref",
          phone: "Telefono",
          edit_apartment: "Modifica Appartamento",
          link_duration: "Durata link",
          fixed_link: "Link fisso",
          select_period: "Seleziona periodo",
          generate: "Genera",
          save: "Salva",
          edit: "Modifica",
          delete_apartment: "Elimina Appartamento",
          cannot_generate_again: "Impossibile generare di nuovo",
          name: "Nome",
          surname: "Cognome",
          email_address: "Indirizzo Email",
          verify_email: "Verifica dell'email in corso...",
          change_email: "Cambia Email",
          error_email_change:
            "Devi scegliere un'altra email, l'email è già in uso, riprova!",
          verify_email_sent:
            "Email di verifica inviata. Controlla la tua casella di posta!",
          success_email_changed: "Email verificata con successo!",
          success_profile_updated: "Profilo aggiornato con successo!",
          error_profile_update:
            "Errore durante l'aggiornamento del profilo, riprova!",
          profile: "Profilo",
          billing: "Fatturazione",
          password: "Password",
          notification: "Info",
          warning: "Attenzione",
          ok: "OK",
          email_already_sent:
            "Hai fatto di gia la richiesta per questa email. Email già inviata",
          success_recovery_email:
            "Email inviata. Controlla la tua casella di posta.",
          error_recovery_email: "Errore nell'invio dell'email, riprova!",
          back_to_sign_in: "Torna al login",
          recover_email: "Recupero Password",
          send_recovery_email: "Invia email di recupero",
          invalid_email_format: "Formato email non valido",
          email_required: "Email obbligatoria",
          passwords_do_not_match: "Le password non corrispondono",
          password_reset_success: "Password reimpostata con successo!",
          error_reset_password:
            "Errore durante il reset della password, riprova!",
          reset_password: "Reimposta Password",
          confirm_password: "Conferma Password",
          new_password: "Nuova Password",
          reset_link_expired:
            "Link di reset scaduto. Si prega di richiederne uno nuovo.",
          logout: "Logout",
          current_password: "Password Corrente",
          new_password_again: "Ripeti Nuova Password",
          two_factor_auth_title:
            "Impostazioni autenticazione a due fattori (MFA)",
          two_factor_auth_description:
            "Abilita l'autenticazione a due fattori per aumentare la sicurezza del tuo account.",
          enable_mfa_button: "Abilita MFA",
          qr_code_success:
            "QR Code generato correttamente! Scansiona il codice con la tua app di autenticazione.",
          mfa_code_label: "Codice MFA",
          verify_mfa_button: "Verifica MFA",
          mfa_verified_success: "MFA verificato con successo!",
          mfa_verify_error:
            "Errore nella verifica del codice MFA. Controlla il codice inserito.",
          mfa_setup_error:
            "Errore durante l'abilitazione MFA. Assicurati che la connessione sia attiva e riprova.",
          mfa_verification_error:
            "Errore durante la verifica del codice MFA. Controlla il codice e riprova.",
          disabled_mfa_label: "MFA Disabilitato",
          mfa_disabled_success: "MFA disabilitato con successo!",
          enabled_mfa_label: "MFA Abilitato",
          signin_title: "Accedi",
          email_label: "Email",
          password_label: "Password",
          forgot_password: "Hai dimenticato la password?",
          recover_password: "Recupera password",
          signin_button: "Accedi",
          no_account: "Non hai un account?",
          signup_link: "Registrati",
          signin_error: "Errore durante l'accesso. Riprova.",
          signup_title: "Registrati",
          name_label: "Nome",
          surname_label: "Cognome",
          signup_button: "Registrati",
          already_have_account: "Hai già un account?",
          signin_link: "Accedi",
          actual_password_notsame: "La password corrente non è corretta",
          new_passwords_not_match: "Le nuove password non corrispondono",
          error_retrieving_profile_data:
            "Errore nel recupero dei dati del profilo",
          signin_success: "Accesso effettuato con successo!",
          welcome: "Bentornata",
          signup_success: "Effettuata con successo!",
          signup_success_title: "Registrazione completata",
          linkCopied: "Link copiato",
        },
      },
    },
  });

export default i18n; // Esporto la configurazione di i18n per l'uso nell'applicazione
