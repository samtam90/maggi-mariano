import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Monte San Savino",
  canonical: links.servizi["trasporto-acqua"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});