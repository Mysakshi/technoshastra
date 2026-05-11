import { getPopupSettings, updatePopupSettings } from "@/app/actions/popupActions";
import { Save, Bell, Image as ImageIcon, Link as LinkIcon, Type, AlignLeft } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AdminPopupPage() {
  const settings = await getPopupSettings();

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Manage Dynamic Popup</h1>
        <p className="text-slate-500 mt-2 text-lg">Control the global announcement popup shown to all visitors.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 p-8 md:p-12">
        <form action={updatePopupSettings} className="space-y-10">
          <div className="flex items-center justify-between p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Popup Visibility</h3>
                <p className="text-sm text-slate-500 font-medium">Toggle the popup on or off for your website.</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="is_active" 
                defaultChecked={settings?.is_active}
                className="sr-only peer" 
              />
              <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Link functionality removed as per user request */}

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2 mb-2">
              <ImageIcon className="h-4 w-4 text-blue-500" />
              Popup Image
            </label>
            <input type="hidden" name="current_image_url" defaultValue={settings?.image_url || ''} />
            <div className="space-y-4">
              {settings?.image_url && (
                <div className="relative w-48 h-32 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src={settings.image_url} alt="Current" className="w-full h-full object-cover" />
                </div>
              )}
              <input 
                name="image" 
                type="file" 
                accept="image/*"
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>



          <div className="pt-6 border-t border-slate-100 flex justify-end">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_8px_30px_rgb(37,99,235,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:-translate-y-1 flex items-center"
            >
              <Save className="h-5 w-5 mr-3" />
              Update Popup Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
