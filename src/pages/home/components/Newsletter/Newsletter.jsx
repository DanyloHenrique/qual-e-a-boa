import InputField from "@/components/inputField/InputField";
import S from "./newsletter.module.scss";
import Button from "@/components/Button/Button";
import { PiTelegramLogoBold } from "react-icons/pi";

const Newsletter = () => {
  return (    
    <section  className={S.sectionNewsletter}>
      <h1>Fique por Dentro</h1>
      <p>
        Receba os melhores eventos da sua cidade direto no seu email. Sem spam,
        só rolê bom.
      </p>
      <div>
        <InputField type="email" placeholder="Informe  seu  email"/>
        <Button icon={PiTelegramLogoBold}>Inscrever</Button>
      </div>
    </section>
  );
};

export default Newsletter;
