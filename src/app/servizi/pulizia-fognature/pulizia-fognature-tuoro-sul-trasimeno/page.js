import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Tuoro sul Trasimeno",
  canonical: links.servizi["pulizia-fognature"]["tuoro-sul-trasimeno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Tuoro sul Trasimeno", 
    locationNames: {label: "Tuoro sul Trasimeno", href: "tuoro-sul-trasimeno"}  
});
