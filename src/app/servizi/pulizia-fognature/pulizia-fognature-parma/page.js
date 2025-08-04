import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Parma",
  canonical: links.servizi["pulizia-fognature"]["parma"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});
