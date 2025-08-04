import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Montelupo Fiorentino",
  canonical: links.servizi["pulizia-fognature"]["montelupo-fiorentino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Montelupo Fiorentino", 
    locationNames: {label: "Montelupo Fiorentino", href: "montelupo-fiorentino"}  
});
