'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { AlertTriangle, Clock, FileText, Globe, Info, Key, Mail, Save, Server, Shield } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'System Settings',
        href: '/settings-page',
    },
];


export default function EnterpriseSettings() {
    // System settings
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [debugMode, setDebugMode] = useState(false);
    const [apiEnabled, setApiEnabled] = useState(true);

    // Security settings
    const [twoFactorRequired, setTwoFactorRequired] = useState(false);
    const [ssoEnabled, setSsoEnabled] = useState(false);
    const [passwordPolicy, setPasswordPolicy] = useState('strong');
    const [ipRestriction, setIpRestriction] = useState(false);

    // Compliance settings
    const [dataRetention, setDataRetention] = useState('90');
    const [auditLogging, setAuditLogging] = useState(true);
    const [gdprCompliance, setGdprCompliance] = useState(true);

    // Handle save settings
    const handleSaveSettings = () => {
        toast('Settings updated', {
            description: 'Your system settings have been updated successfully.',
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="System settings" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="mx-auto w-full max-w-5xl space-y-8 p-4">
                    {/* Header */}
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="text-2xl font-semibold">System Settings</h1>
                            <p className="text-muted-foreground">Configure critical system parameters and security policies</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline">Cancel</Button>
                            <Button onClick={handleSaveSettings}>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                            </Button>
                        </div>
                    </div>

                    {maintenanceMode && (
                        <div className="flex items-start rounded-md border border-yellow-200 bg-yellow-50 px-4 py-3 text-yellow-800">
                            <AlertTriangle className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
                            <div>
                                <h3 className="font-medium">Maintenance Mode Active</h3>
                                <p className="text-sm">
                                    The system is currently in maintenance mode. Only administrators can access the application.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="space-y-8 md:col-span-2">
                            {/* General System Settings */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle>General Configuration</CardTitle>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            System
                                        </Badge>
                                    </div>
                                    <CardDescription>Configure core system settings</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="company-name">Organization Name</Label>
                                            <Input id="company-name" defaultValue="Acme Corporation" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="domain">Primary Domain</Label>
                                            <Input id="domain" defaultValue="acme.example.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="system-email">System Email</Label>
                                        <Input id="system-email" type="email" defaultValue="system@example.com" />
                                        <p className="text-muted-foreground text-xs">Used for system notifications and alerts</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="timezone">Default Timezone</Label>
                                            <Select defaultValue="UTC">
                                                <SelectTrigger id="timezone">
                                                    <SelectValue placeholder="Select timezone" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="UTC">UTC</SelectItem>
                                                    <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                                                    <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                                                    <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                                                    <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="date-format">Date Format</Label>
                                            <Select defaultValue="MM/DD/YYYY">
                                                <SelectTrigger id="date-format">
                                                    <SelectValue placeholder="Select format" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                                                    <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                                                    <SelectItem value="YYYY-MM-DD">YYYY-MM-DD (ISO)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <h3 className="text-sm font-medium">System Status</h3>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Server className="text-muted-foreground h-4 w-4" />
                                                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                                                </div>
                                                <Switch id="maintenance-mode" checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                                            </div>
                                            <p className="text-muted-foreground text-sm">When enabled, only administrators can access the system</p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Info className="text-muted-foreground h-4 w-4" />
                                                    <Label htmlFor="debug-mode">Debug Mode</Label>
                                                </div>
                                                <Switch id="debug-mode" checked={debugMode} onCheckedChange={setDebugMode} />
                                            </div>
                                            <p className="text-muted-foreground text-sm">Enable detailed error messages and logging</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Security Settings */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Security Configuration</CardTitle>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            Security
                                        </Badge>
                                    </div>
                                    <CardDescription>Configure security policies and access controls</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-medium">Authentication</h3>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Key className="text-muted-foreground h-4 w-4" />
                                                    <Label htmlFor="two-factor">Require Two-Factor Authentication</Label>
                                                </div>
                                                <Switch id="two-factor" checked={twoFactorRequired} onCheckedChange={setTwoFactorRequired} />
                                            </div>
                                            <p className="text-muted-foreground text-sm">Require all users to set up two-factor authentication</p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Shield className="text-muted-foreground h-4 w-4" />
                                                    <Label htmlFor="sso">Single Sign-On (SSO)</Label>
                                                </div>
                                                <Switch id="sso" checked={ssoEnabled} onCheckedChange={setSsoEnabled} />
                                            </div>
                                            <p className="text-muted-foreground text-sm">Enable SAML or OAuth-based single sign-on</p>
                                        </div>

                                        {ssoEnabled && (
                                            <div className="bg-muted space-y-4 rounded-md p-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="sso-provider">SSO Provider</Label>
                                                    <Select defaultValue="saml">
                                                        <SelectTrigger id="sso-provider">
                                                            <SelectValue placeholder="Select provider" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="saml">SAML 2.0</SelectItem>
                                                            <SelectItem value="oidc">OpenID Connect</SelectItem>
                                                            <SelectItem value="oauth">OAuth 2.0</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="idp-url">Identity Provider URL</Label>
                                                    <Input id="idp-url" placeholder="https://login.example.com" />
                                                </div>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <Label htmlFor="password-policy">Password Policy</Label>
                                            <Select value={passwordPolicy} onValueChange={setPasswordPolicy}>
                                                <SelectTrigger id="password-policy">
                                                    <SelectValue placeholder="Select policy" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                                                    <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                                                    <SelectItem value="complex">Complex (12+ chars, mixed case, numbers, symbols)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                                            <Select defaultValue="30">
                                                <SelectTrigger id="session-timeout">
                                                    <SelectValue placeholder="Select timeout" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="15">15 minutes</SelectItem>
                                                    <SelectItem value="30">30 minutes</SelectItem>
                                                    <SelectItem value="60">60 minutes</SelectItem>
                                                    <SelectItem value="120">2 hours</SelectItem>
                                                    <SelectItem value="240">4 hours</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <h3 className="text-sm font-medium">Access Control</h3>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Globe className="text-muted-foreground h-4 w-4" />
                                                    <Label htmlFor="ip-restriction">IP Restriction</Label>
                                                </div>
                                                <Switch id="ip-restriction" checked={ipRestriction} onCheckedChange={setIpRestriction} />
                                            </div>
                                            <p className="text-muted-foreground text-sm">Restrict access to specific IP addresses or ranges</p>
                                        </div>

                                        {ipRestriction && (
                                            <div className="space-y-2">
                                                <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                                                <Textarea
                                                    id="allowed-ips"
                                                    placeholder="Enter IP addresses or CIDR ranges, one per line"
                                                    className="font-mono text-sm"
                                                    rows={3}
                                                />
                                                <p className="text-muted-foreground text-xs">Example: 192.168.1.1 or 10.0.0.0/24</p>
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="failed-attempts">Max Failed Login Attempts</Label>
                                                <Select defaultValue="5">
                                                    <SelectTrigger id="failed-attempts" className="w-20">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="3">3</SelectItem>
                                                        <SelectItem value="5">5</SelectItem>
                                                        <SelectItem value="10">10</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <p className="text-muted-foreground text-sm">Number of failed attempts before account lockout</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Compliance Settings */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Compliance & Data Governance</CardTitle>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            Compliance
                                        </Badge>
                                    </div>
                                    <CardDescription>Configure data retention and compliance settings</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="data-retention">Data Retention Period (days)</Label>
                                        <Select value={dataRetention} onValueChange={setDataRetention}>
                                            <SelectTrigger id="data-retention">
                                                <SelectValue placeholder="Select period" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="30">30 days</SelectItem>
                                                <SelectItem value="60">60 days</SelectItem>
                                                <SelectItem value="90">90 days</SelectItem>
                                                <SelectItem value="180">180 days</SelectItem>
                                                <SelectItem value="365">365 days</SelectItem>
                                                <SelectItem value="forever">Indefinitely</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <p className="text-muted-foreground text-sm">How long to retain user data and activity logs</p>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <FileText className="text-muted-foreground h-4 w-4" />
                                                <Label htmlFor="audit-logging">Audit Logging</Label>
                                            </div>
                                            <Switch id="audit-logging" checked={auditLogging} onCheckedChange={setAuditLogging} />
                                        </div>
                                        <p className="text-muted-foreground text-sm">Log all user actions for compliance and security purposes</p>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Shield className="text-muted-foreground h-4 w-4" />
                                                <Label htmlFor="gdpr-compliance">GDPR Compliance</Label>
                                            </div>
                                            <Switch id="gdpr-compliance" checked={gdprCompliance} onCheckedChange={setGdprCompliance} />
                                        </div>
                                        <p className="text-muted-foreground text-sm">Enable features required for GDPR compliance</p>
                                    </div>

                                    {gdprCompliance && (
                                        <div className="space-y-2">
                                            <Label htmlFor="dpo-email">Data Protection Officer Email</Label>
                                            <Input id="dpo-email" type="email" placeholder="dpo@example.com" />
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="data-export">Data Export Format</Label>
                                            <Select defaultValue="json">
                                                <SelectTrigger id="data-export" className="w-28">
                                                    <SelectValue placeholder="Select format" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="json">JSON</SelectItem>
                                                    <SelectItem value="csv">CSV</SelectItem>
                                                    <SelectItem value="xml">XML</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <p className="text-muted-foreground text-sm">Default format for data exports and backups</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-8">
                            {/* API Settings */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle>API Configuration</CardTitle>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            API
                                        </Badge>
                                    </div>
                                    <CardDescription>Configure API access and settings</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="api-enabled">API Access</Label>
                                            <Switch id="api-enabled" checked={apiEnabled} onCheckedChange={setApiEnabled} />
                                        </div>
                                        <p className="text-muted-foreground text-sm">Enable API access for external integrations</p>
                                    </div>

                                    {apiEnabled && (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="rate-limit">Rate Limit (requests per minute)</Label>
                                                <Select defaultValue="60">
                                                    <SelectTrigger id="rate-limit">
                                                        <SelectValue placeholder="Select limit" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="30">30</SelectItem>
                                                        <SelectItem value="60">60</SelectItem>
                                                        <SelectItem value="100">100</SelectItem>
                                                        <SelectItem value="500">500</SelectItem>
                                                        <SelectItem value="1000">1000</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="api-version">API Version</Label>
                                                <Select defaultValue="v1">
                                                    <SelectTrigger id="api-version">
                                                        <SelectValue placeholder="Select version" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="v1">v1 (Current)</SelectItem>
                                                        <SelectItem value="v2">v2 (Beta)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="bg-muted/50 rounded-md border p-3">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <h3 className="text-sm font-medium">API Key</h3>
                                                    <Badge variant="secondary" className="text-xs">
                                                        Production
                                                    </Badge>
                                                </div>
                                                <div className="bg-background mb-2 overflow-x-auto rounded border p-2 font-mono text-xs">
                                                    sk_live_••••••••••••••••••••••••••••••
                                                </div>
                                                <div className="flex justify-end">
                                                    <Button variant="outline" size="sm">
                                                        Regenerate
                                                    </Button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Email Settings */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Email Configuration</CardTitle>
                                        <Badge variant="outline" className="text-xs font-normal">
                                            Email
                                        </Badge>
                                    </div>
                                    <CardDescription>Configure email delivery settings</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="smtp-host">SMTP Host</Label>
                                        <Input id="smtp-host" defaultValue="smtp.example.com" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="smtp-port">SMTP Port</Label>
                                            <Input id="smtp-port" defaultValue="587" />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="smtp-security">Security</Label>
                                            <Select defaultValue="tls">
                                                <SelectTrigger id="smtp-security">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">None</SelectItem>
                                                    <SelectItem value="ssl">SSL</SelectItem>
                                                    <SelectItem value="tls">TLS</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="smtp-username">SMTP Username</Label>
                                        <Input id="smtp-username" defaultValue="notifications@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="smtp-password">SMTP Password</Label>
                                        <Input id="smtp-password" type="password" value="••••••••••••" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="from-email">From Email Address</Label>
                                        <Input id="from-email" defaultValue="no-reply@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="from-name">From Name</Label>
                                        <Input id="from-name" defaultValue="Acme Corporation" />
                                    </div>

                                    <Button variant="outline" size="sm" className="w-full">
                                        <Mail className="mr-2 h-4 w-4" />
                                        Send Test Email
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* System Information */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle>System Information</CardTitle>
                                    <CardDescription>Current system status and information</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-1">
                                        <div className="text-muted-foreground text-xs">Version</div>
                                        <div className="font-medium">v2.5.3 (Build 1842)</div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-muted-foreground text-xs">Environment</div>
                                        <div className="font-medium">Production</div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-muted-foreground text-xs">Last Updated</div>
                                        <div className="font-medium">May 19, 2025 - 08:42 PM</div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-muted-foreground text-xs">Database</div>
                                        <div className="font-medium">PostgreSQL 15.3</div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="text-muted-foreground text-xs">License</div>
                                        <div className="flex items-center">
                                            <span className="mr-2 font-medium">Enterprise</span>
                                            <Badge variant="success" className="text-xs">
                                                Active
                                            </Badge>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Clock className="text-muted-foreground mr-2 h-4 w-4" />
                                            <span className="text-sm">Server Time</span>
                                        </div>
                                        <span className="text-sm font-medium">May 19, 2025 - 08:42:12 PM UTC</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
