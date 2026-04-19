import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const QuickAccessBar = () => {
  return (
    <section className="border-b border-border bg-secondary/50 py-8 md:py-10">
      <div className="container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-lg"
        >
          <Link
            to="/feriados"
            className="group flex items-center gap-4 border-2 border-accent/40 bg-accent/5 p-6 transition-all hover:border-accent hover:shadow-card-hover"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-accent text-accent-foreground">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-base font-bold text-foreground">
                Feriados 2026
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Solicite abertura do seu estabelecimento ou baixe a relação completa de feriados
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickAccessBar;
