import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Save } from "lucide-react";

export default function ManualEntry() {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Manual Entry</h1>
          <p className="text-muted-foreground mt-2">
            Create license records manually or for new projects
          </p>
        </div>

        <Card className="shadow-md max-w-4xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              New License Record
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Project Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="project">Project Name</Label>
                  <Select>
                    <SelectTrigger id="project" className="mt-2">
                      <SelectValue placeholder="Select project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="punjab">Punjab Police VMS</SelectItem>
                      <SelectItem value="nr">NR Project Demo</SelectItem>
                      <SelectItem value="new">+ Add New Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="si">SI Number</Label>
                  <Input 
                    id="si" 
                    placeholder="SI-XXX-2024-XXX"
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Machine & Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="machineKey">Machine Key *</Label>
                  <Input 
                    id="machineKey" 
                    placeholder="Enter machine key"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    placeholder="Site location"
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Equipment Counts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="cameras">Camera Count</Label>
                  <Input 
                    id="cameras" 
                    type="number"
                    placeholder="0"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="nvr">NVR Count</Label>
                  <Input 
                    id="nvr" 
                    type="number"
                    placeholder="0"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="va">VA Count</Label>
                  <Input 
                    id="va" 
                    type="number"
                    placeholder="0"
                    className="mt-2"
                  />
                </div>
              </div>

              {/* License Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="licenseType">License Type</Label>
                  <Select>
                    <SelectTrigger id="licenseType" className="mt-2">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="permanent">Permanent</SelectItem>
                      <SelectItem value="demo">Demo (30 days)</SelectItem>
                      <SelectItem value="trial">Trial (90 days)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="validity">Validity (Days)</Label>
                  <Input 
                    id="validity" 
                    type="number"
                    placeholder="365"
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any additional information..."
                  className="mt-2"
                  rows={4}
                />
              </div>

              {/* Google Sheet Mapping */}
              <div>
                <Label htmlFor="sheet">Google Sheet Mapping (Optional)</Label>
                <Select>
                  <SelectTrigger id="sheet" className="mt-2">
                    <SelectValue placeholder="Select sheet or skip" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="punjab-sheet">Punjab Police Sheet</SelectItem>
                    <SelectItem value="nr-sheet">NR Project Sheet</SelectItem>
                    <SelectItem value="none">No Sync</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="bg-gradient-primary">
                  <Save className="w-4 h-4 mr-2" />
                  Save Record
                </Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
