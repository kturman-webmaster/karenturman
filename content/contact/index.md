+++
title = "Contact"
description = "Get in touch with Karen Turman - French professor, researcher, and international dance instructor"
template = "page.html"
+++

<p>I'd love to hear from you! Whether you have questions about my teaching, research, or dance instruction, please feel free to reach out using the form below.</p>

<form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
  <input type="hidden" name="access_key" value="4afd0a97-b940-499c-9de6-1a9221ad5090">

  <!-- Redirect after successful submission -->
  <input type="hidden" name="redirect" value="https://karenturman.com/contact">

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>

  <!-- Honeypot field (hidden from users, catches bots) -->
  <input type="checkbox" name="botcheck" class="honeypot" tabindex="-1" autocomplete="off">

  <button type="submit" class="submit-btn">Send Message</button>
</form>
