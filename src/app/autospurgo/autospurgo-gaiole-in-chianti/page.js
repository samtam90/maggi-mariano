import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Gaiole in Chianti",
    canonical: links.autospurgo["gaiole-in-chianti"],
});
export default withBaseProps({ 
    title: "Autospurgo Gaiole in Chianti", 
    locationNames: {label: "Gaiole in Chianti", href: "gaiole-in-chianti"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
