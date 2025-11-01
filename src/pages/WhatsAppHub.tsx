import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, QrCode, CheckCircle2, AlertTriangle, Mail } from "lucide-react";
import { useState } from "react";

const mockMessages = [
  {
    id: 1,
    from: "Punjab Police Group",
    message: "Machine Key: PB-VMS-2024-4532\nCamera Count: 16\nNVR: 2\nVA Count: 8\nLocation: Sector 45, Chandigarh",
    timestamp: "2024-01-15 14:23",
    status: "new",
    isDuplicate: false
  },
  {
    id: 2,
    from: "NR Project Demo",
    message: "Key: NR-DEMO-1234\nCameras: 8\nDemo License\nLocation: Delhi NCR",
    timestamp: "2024-01-15 13:45",
    status: "processed",
    isDuplicate: false
  },
  {
    id: 3,
    from: "Punjab Police Group",
    message: "Machine Key: PB-VMS-2024-4532\nRenewal Request",
    timestamp: "2024-01-15 12:10",
    status: "duplicate",
    isDuplicate: true
  },
];

export default function WhatsAppHub() {
  const [connected, setConnected] = useState(false);

  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">WhatsApp Integration Hub</h1>
          <p className="text-muted-foreground mt-2">
            Connect and manage WhatsApp message automation
          </p>
        </div>

        {/* Connection Status */}
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Connection Status
              </span>
              <Badge variant={connected ? "default" : "secondary"}>
                {connected ? "Connected" : "Disconnected"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!connected ? (
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    Scan QR code with WhatsApp to connect
                  </p>
                </div>
                <Button 
                  onClick={() => setConnected(true)}
                  className="bg-gradient-primary"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Connect WhatsApp
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium">Connected to 3 groups</p>
                    <p className="text-sm text-muted-foreground">Listening for new messages</p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => setConnected(false)}>
                  Disconnect
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Messages List */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Incoming Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-4 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{msg.from}</h3>
                        {msg.isDuplicate && (
                          <Badge variant="destructive" className="text-xs">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            Duplicate
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                    </div>
                    <Badge 
                      variant={
                        msg.status === "new" ? "default" : 
                        msg.status === "processed" ? "secondary" : 
                        "destructive"
                      }
                    >
                      {msg.status}
                    </Badge>
                  </div>
                  
                  <div className="bg-secondary/30 p-3 rounded text-sm mb-3 font-mono">
                    {msg.message}
                  </div>

                  {msg.status === "new" && !msg.isDuplicate && (
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-gradient-primary">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Process & Save
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4 mr-2" />
                        Draft Email
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
