import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Nocera Umbra",
    canonical: links.autospurgo["nocera-umbra"],
});
export default withBaseProps({ 
    title: "Autospurgo Nocera Umbra", 
    locationNames: {label: "Nocera Umbra", href: "nocera-umbra"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
