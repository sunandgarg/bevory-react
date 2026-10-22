import { useEffect, useState } from "react";
import { apiClient } from "@/integrations/api/client";

type Lead = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  city: string;
  consented_at: string;
  contact_verified: boolean;
};

const AdminMarketingLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.from("marketing_leads").select("id,name,email,mobile,city,consented_at,contact_verified")
      .order("consented_at", { ascending: false })
      .then(({ data, error: loadError }: { data: Lead[] | null; error: { message: string } | null }) => {
        if (loadError) setError(loadError.message);
        else setLeads(data || []);
      });
  }, []);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">City update signups</h1>
        <p className="mt-1 text-sm text-muted-foreground">Consent captured through the city updates form. Contact details are unverified; confirm ownership before sending messages.</p>
      </div>
      {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : (
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[670px] text-left text-sm">
            <thead className="bg-muted/60 text-xs uppercase text-muted-foreground"><tr><th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Mobile</th><th className="p-3">City</th><th className="p-3">Signed up</th><th className="p-3">Status</th></tr></thead>
            <tbody>{leads.map((lead) => (
              <tr key={lead.id} className="border-t border-border"><td className="p-3 font-medium">{lead.name}</td><td className="p-3">{lead.email}</td><td className="p-3">{lead.mobile}</td><td className="p-3">{lead.city}</td><td className="p-3">{new Date(lead.consented_at).toLocaleDateString("en-IN")}</td><td className="p-3">{lead.contact_verified ? "Verified" : "Unverified"}</td></tr>
            ))}</tbody>
          </table>
          {leads.length === 0 && <p className="p-5 text-sm text-muted-foreground">No signups yet.</p>}
        </div>
      )}
    </div>
  );
};

export default AdminMarketingLeads;
