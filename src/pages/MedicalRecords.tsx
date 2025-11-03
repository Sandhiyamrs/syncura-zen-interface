import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Pill, Calendar, Cloud } from "lucide-react";

const MedicalRecords = () => {
  const records = [
    { type: "Blood Test", date: "July 2025", status: "Normal", color: "text-green-500" },
    { type: "X-Ray", date: "August 2025", status: "Reviewed", color: "text-blue-500" },
    { type: "Prescription", date: "September 2025", status: "Active", color: "text-purple-500" },
  ];

  const medications = [
    {
      name: "Vitamin D3",
      dosage: "1000 IU",
      frequency: "Once daily",
      doctor: "Dr. Sarah Johnson",
    },
    {
      name: "Omega-3",
      dosage: "500mg",
      frequency: "Twice daily",
      doctor: "Dr. Sarah Johnson",
    },
  ];

  return (
    <div className="min-h-screen gradient-calm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Medical Records</h1>
        <div className="flex gap-2">
          <Button className="gradient-primary text-white">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <Button variant="outline" className="glass-card">
            <Cloud className="w-4 h-4 mr-2" />
            Sync
          </Button>
        </div>
      </div>

      {/* Records */}
      <div className="space-y-4 mb-6">
        {records.map((record) => (
          <Card key={record.type} className="glass-card hover:scale-105 transition-smooth cursor-pointer">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{record.type}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {record.date}
                </div>
              </div>
              <div className={`font-semibold ${record.color}`}>{record.status}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Medications */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="w-5 h-5" />
            My Medications 💊
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {medications.map((med) => (
            <div key={med.name} className="p-4 rounded-xl border border-border space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">{med.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {med.dosage} • {med.frequency}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Prescribed by {med.doctor}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Refill
                </Button>
                <Button size="sm" className="flex-1 gradient-primary text-white">
                  Set Reminder ⏰
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalRecords;
