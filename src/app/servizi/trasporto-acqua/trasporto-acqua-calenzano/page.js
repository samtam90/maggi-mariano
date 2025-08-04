import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Calenzano",
  canonical: links.servizi["trasporto-acqua"]["calenzano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});