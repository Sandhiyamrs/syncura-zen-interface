import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, Video, Phone } from "lucide-react";

const DoctorConsultation = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      rating: 4.8,
      reviews: 234,
      availability: "Available Today",
      image: "👩‍⚕️",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Mental Health",
      rating: 4.9,
      reviews: 189,
      availability: "Available Tomorrow",
      image: "👨‍⚕️",
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Nutritionist",
      rating: 4.7,
      reviews: 156,
      availability: "Available Today",
      image: "👩‍⚕️",
    },
  ];

  return (
    <div className="min-h-screen gradient-calm p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Doctor Consultation</h1>
        <p className="text-muted-foreground">Connect with healthcare professionals</p>
      </div>

      {/* Doctors List */}
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <Card key={doctor.name} className="glass-card overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                    {doctor.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{doctor.rating}</span>
                        <span className="text-xs text-muted-foreground">({doctor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                        <div className="w-2 h-2 rounded-full bg-green-600 animate-health-pulse" />
                        {doctor.availability}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 gradient-primary text-white">
                    <Video className="w-4 h-4 mr-2" />
                    Video Call
                  </Button>
                  <Button variant="outline" className="flex-1 glass-card">
                    <Phone className="w-4 h-4 mr-2" />
                    Voice Call
                  </Button>
                  <Button variant="outline" className="glass-card">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Premium Badge */}
      <Card className="glass-card mt-6 border-2 border-accent/30">
        <CardContent className="p-6 text-center">
          <div className="text-2xl mb-2">✨</div>
          <h3 className="font-semibold mb-2">Premium Feature</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Unlock unlimited consultations with verified doctors
          </p>
          <Button className="gradient-primary text-white">Upgrade to Premium</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorConsultation;
