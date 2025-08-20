import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel Ritaldi",
    canonical: links.autospurgo["castel-ritaldi"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel Ritaldi", 
    locationNames: {label: "Castel Ritaldi", href: "castel-ritaldi"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
