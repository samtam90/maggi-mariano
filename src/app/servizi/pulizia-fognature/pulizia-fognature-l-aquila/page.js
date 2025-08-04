import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature L'Aquila",
  canonical: links.servizi["pulizia-fognature"]["l-aquila"]
});
export default withBaseProps({ 
    title: "Pulizia fognature L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
