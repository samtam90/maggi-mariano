import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Scandicci",
  canonical: links.servizi["trasporto-acqua"]["scandicci"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});