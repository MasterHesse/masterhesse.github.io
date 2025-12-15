<template>
  <div>
    <Header />
    <section class="contact">
      <h1>Contact Me!</h1>
      <form @submit.prevent="submitForm">
        <label for="title">TITLE</label>
        <input type="text" id="title" v-model="form.title" required placeholder="Please type the title here..." />

        <label for="name">NAME</label>
        <input type="text" id="name" v-model="form.name" required placeholder="Please type your name here..." />

        <label for="email">EMAIL</label>
        <input type="email" id="email" v-model="form.email" required placeholder="Please type your email here" />

        <label for="message">MESSAGE</label>
        <textarea id="message" v-model="form.message" required placeholder="Please type your message here..."></textarea>

        <button type="submit">SEND</button>
      </form>

      <div class="contact-links">
        <h2>Other Contact Methods</h2>
        <div class="icons">
          <a href="https://github.com/MasterHesse" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://dev.to/masterhesse" target="_blank">
            <i class="fab fa-dev"></i>
          </a>
          <a href="https://space.bilibili.com/407512807" target="_blank">
            <i class="fab fa-bilibili"></i>
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import emailjs from 'emailjs-com';

emailjs.init("HBkyj-33KqWZkay-l");

export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        title: '',
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      console.log("Submit form triggered!");  // 这行日志用于确认是否触发了方法
      const serviceID = "service_y49nq1x";  // EmailJS服务ID
      const templateID = "template_sgdyfhe"; // EmailJS模板ID

      const params = {
        title: this.form.title,
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message,
      };

      try {
        const response = await emailjs.send(serviceID, templateID, params);
        console.log('Email sent successfully:', response);
      } catch (error) {
        console.error('Email sending failed:', error);  // 输出详细的错误信息
      }
    }
  }
};
</script>

<style scoped>
.contact {
  font-weight: bold;
  padding: 30px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 8px;
  max-width: 100%;
  margin: 0 auto;
}

h1 {
  font-weight: bolder;
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #ff5722;
}

button {
  font-weight: bold;
  background-color: #ff5722;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e64a19;
}

button:active {
  background-color: #d84315;
}

.contact-links {
  margin-top: 30px;
  text-align: center;
}

.contact-links h2 {
  font-size: 1.5rem;
  color: #333;
}

.contact-links .icons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-links .icons a {
  color: #ff5722;
  font-size: 2rem;
}

.contact-links .icons a:hover {
  color: #e64a19;
}

@media (max-width: 768px) {
  .contact {
    padding: 20px;
    width: 90%;
  }
}
</style>
