import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montepulciano",
    canonical: links.autospurgo["montepulciano"],
});
export default withBaseProps({ 
    title: "Autospurgo Montepulciano", 
    locationNames: {label: "Montepulciano", href: "montepulciano"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
