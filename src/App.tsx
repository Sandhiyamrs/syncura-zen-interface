import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import MentalHealth from "./pages/MentalHealth";
import MedicalRecords from "./pages/MedicalRecords";
import DoctorConsultation from "./pages/DoctorConsultation";
import Wellness from "./pages/Wellness";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/medical-records" element={<MedicalRecords />} />
          <Route path="/doctor-consultation" element={<DoctorConsultation />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
