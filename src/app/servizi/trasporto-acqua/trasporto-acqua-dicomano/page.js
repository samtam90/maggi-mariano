import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Dicomano",
  canonical: links.servizi["trasporto-acqua"]["dicomano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Dicomano", 
    locationNames: {label: "Dicomano", href: "dicomano"}  
});