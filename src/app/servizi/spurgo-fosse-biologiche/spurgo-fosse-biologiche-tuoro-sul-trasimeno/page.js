import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Tuoro sul Trasimeno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["tuoro-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});
