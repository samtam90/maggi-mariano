import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Paciano",
  canonical: links.servizi["noleggio-bagni-chimici"]["paciano"]
});
export default withBaseProps({ 
  title: "Noleggio bagni chimici Paciano", 
  locationNames: {label: "Paciano", href: "paciano"} 
});
