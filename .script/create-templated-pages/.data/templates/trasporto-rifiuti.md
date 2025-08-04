import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti [name]",
  canonical: links.servizi["trasporto-rifiuti"]["[path]"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});