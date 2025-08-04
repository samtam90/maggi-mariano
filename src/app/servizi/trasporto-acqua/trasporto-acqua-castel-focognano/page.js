import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel Focognano",
  canonical: links.servizi["trasporto-acqua"]["castel-focognano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});