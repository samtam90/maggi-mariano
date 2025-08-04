import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Barletta-Andria-Trani",
  canonical: links.servizi["trasporto-rifiuti"]["barletta-andria-trani"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Barletta-Andria-Trani", 
    locationNames: {label: "Barletta-Andria-Trani", href: "barletta-andria-trani"}  
});