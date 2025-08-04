import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bologna",
  canonical: links.servizi["trasporto-rifiuti"]["bologna"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});