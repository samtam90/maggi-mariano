import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Tuoro sul Trasimeno",
  canonical: links.servizi["trasporto-acqua"]["tuoro-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});