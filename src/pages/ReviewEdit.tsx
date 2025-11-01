import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Edit, Trash2, CheckCircle2, AlertTriangle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockRecords = [
  {
    id: 1,
    machineKey: "PB-VMS-2024-4532",
    project: "Punjab Police VMS",
    cameras: 16,
    nvr: 2,
    va: 8,
    location: "Sector 45, Chandigarh",
    status: "active",
    validUntil: "2025-01-15"
  },
  {
    id: 2,
    machineKey: "NR-DEMO-1234",
    project: "NR Project Demo",
    cameras: 8,
    nvr: 1,
    va: 4,
    location: "Delhi NCR",
    status: "demo",
    validUntil: "2024-02-15"
  },
  {
    id: 3,
    machineKey: "CS-2024-7890",
    project: "City Surveillance",
    cameras: 24,
    nvr: 3,
    va: 12,
    location: "Mumbai Central",
    status: "expired",
    validUntil: "2024-01-01"
  },
];

export default function ReviewEdit() {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Review & Edit</h1>
          <p className="text-muted-foreground mt-2">
            Search, review, and manage license records
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-6 shadow-md">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Search by machine key, project, or location..."
                  className="pl-10"
                />
              </div>
              <Button className="bg-gradient-primary">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Records Table */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>License Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Machine Key</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead className="text-center">Cameras</TableHead>
                  <TableHead className="text-center">NVR</TableHead>
                  <TableHead className="text-center">VA</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valid Until</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRecords.map((record) => (
                  <TableRow key={record.id} className="hover:bg-secondary/30">
                    <TableCell className="font-mono font-medium">{record.machineKey}</TableCell>
                    <TableCell>{record.project}</TableCell>
                    <TableCell className="text-center">{record.cameras}</TableCell>
                    <TableCell className="text-center">{record.nvr}</TableCell>
                    <TableCell className="text-center">{record.va}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{record.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          record.status === "active" ? "default" :
                          record.status === "demo" ? "secondary" :
                          "destructive"
                        }
                      >
                        {record.status === "active" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {record.status === "expired" && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{record.validUntil}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
