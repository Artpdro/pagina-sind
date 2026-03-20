import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    name: "Sede – Paulista",
    address: "Rua Epitácio Pessoa, 04, Centro, Paulista – PE",
    phone: "(81) 3371-8119 / (81) 99248-7566",
    mapUrl: "https://www.google.com/maps/place/Sindnorte",
  },
  {
    name: "Unidade Igarassu",
    address: "Rua Joaquim Nabuco, 134, Centro, Igarassu – PE",
    phone: "(81) 99174-8025",
    mapUrl: "https://www.google.com/maps/place/Sindnorte+Igarassu",
  },
  {
    name: "Unidade Olinda",
    address: "Av. Carlos de Lima Cavalcante, 1135, Bairro Novo, Olinda – PE",
    phone: "(81) 99248-8540",
    mapUrl: "https://www.google.com/maps/place/Galeria+Olinda+Plaza+II",
  },
];

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-extrabold text-primary-foreground md:text-4xl"
            >
              Contato
            </motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Entre em contato conosco. Estamos aqui para ajudar sua empresa.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground">Envie uma mensagem</h2>
                <p className="mt-2 text-sm text-muted-foreground">Preencha o formulário abaixo e retornaremos em breve.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Nome</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">E-mail</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Telefone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(81) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Mensagem</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground">Informações</h2>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">contato@sindnorte.com.br</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">juridico@sindnorte.com.br (Núcleo Jurídico)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Seg–Sex: 07:30 às 12:00 / 13:00 às 17:00</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">Nossas Unidades</h3>
                  {offices.map((office) => (
                    <a
                      key={office.name}
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 hover:shadow-card-hover"
                    >
                      <h4 className="font-display text-sm font-bold text-card-foreground">{office.name}</h4>
                      <div className="mt-2 flex items-start gap-2 text-xs text-muted-foreground">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {office.address}
                      </div>
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                        <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {office.phone}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
