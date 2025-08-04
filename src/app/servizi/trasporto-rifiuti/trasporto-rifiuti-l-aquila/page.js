import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti L'Aquila",
  canonical: links.servizi["trasporto-rifiuti"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});