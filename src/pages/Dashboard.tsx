import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  FileCheck, 
  AlertCircle, 
  Users,
  Camera,
  Server,
  CheckCircle2
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    icon: Users,
    change: "+2 this month",
    trend: "up"
  },
  {
    title: "Active Licenses",
    value: "1,247",
    icon: FileCheck,
    change: "+185 this week",
    trend: "up"
  },
  {
    title: "Cameras Deployed",
    value: "3,842",
    icon: Camera,
    change: "+324 this month",
    trend: "up"
  },
  {
    title: "Pending Reviews",
    value: "23",
    icon: AlertCircle,
    change: "Requires attention",
    trend: "warning"
  },
];

const recentProjects = [
  {
    name: "Punjab Police VMS",
    si: "SI-PB-2024-001",
    cameras: 856,
    licenses: 342,
    status: "active"
  },
  {
    name: "NR Project Demo",
    si: "SI-NR-2024-005",
    cameras: 124,
    licenses: 48,
    status: "active"
  },
  {
    name: "City Surveillance Phase 2",
    si: "SI-CS-2024-012",
    cameras: 412,
    licenses: 156,
    status: "pending"
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            License automation overview and system statistics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={cn(
                  "w-5 h-5",
                  stat.trend === "warning" ? "text-warning" : "text-primary"
                )} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <p className={cn(
                  "text-xs mt-2 flex items-center gap-1",
                  stat.trend === "up" ? "text-success" : "text-muted-foreground"
                )}>
                  {stat.trend === "up" && <TrendingUp className="w-3 h-3" />}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Projects */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" />
              Recent Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.si}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <Badge variant={project.status === "active" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{project.si}</p>
                  </div>
                  <div className="flex items-center gap-8 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{project.cameras}</div>
                      <div className="text-muted-foreground">Cameras</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{project.licenses}</div>
                      <div className="text-muted-foreground">Licenses</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
