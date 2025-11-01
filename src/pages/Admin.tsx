import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, Shield, Mail, Link as LinkIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockUsers = [
  { id: 1, name: "Admin User", email: "admin@lams.com", role: "Admin", status: "active" },
  { id: 2, name: "John Operator", email: "john@lams.com", role: "Operator", status: "active" },
  { id: 3, name: "Jane Reviewer", email: "jane@lams.com", role: "Reviewer", status: "active" },
  { id: 4, name: "Mike Limited", email: "mike@lams.com", role: "Limited", status: "inactive" },
];

const sheetMappings = [
  { project: "Punjab Police VMS", sheetId: "1abc...xyz", status: "synced", lastSync: "2 mins ago" },
  { project: "NR Project Demo", sheetId: "2def...uvw", status: "synced", lastSync: "5 mins ago" },
  { project: "City Surveillance", sheetId: "3ghi...rst", status: "pending", lastSync: "1 hour ago" },
];

export default function Admin() {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground mt-2">
            Manage users, permissions, and system settings
          </p>
        </div>

        {/* User Management */}
        <Card className="mb-6 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              User Management
            </CardTitle>
            <Button className="bg-gradient-primary">
              Add User
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                        <Shield className="w-3 h-3 mr-1" />
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Google Sheet Mappings */}
        <Card className="mb-6 shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-primary" />
              Google Sheet Mappings
            </CardTitle>
            <Button variant="outline">
              Configure New
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Sheet ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sheetMappings.map((mapping, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{mapping.project}</TableCell>
                    <TableCell className="font-mono text-sm text-muted-foreground">
                      {mapping.sheetId}
                    </TableCell>
                    <TableCell>
                      <Badge variant={mapping.status === "synced" ? "default" : "secondary"}>
                        {mapping.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {mapping.lastSync}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
                        Sync Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* System Settings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Configure SMTP settings for automated license emails
              </p>
              <Button variant="outline" className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                Configure SMTP
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Manage system-wide configuration and preferences
              </p>
              <Button variant="outline" className="w-full">
                <Settings className="w-4 h-4 mr-2" />
                View Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
