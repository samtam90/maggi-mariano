import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua [name]",
  canonical: links.servizi["trasporto-acqua"]["[path]"]
});
export default withBaseProps({ 
    title: "Trasporto acqua [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});