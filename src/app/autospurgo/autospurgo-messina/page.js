import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Messina",
    canonical: links.autospurgo["messina"],
});
export default withBaseProps({ 
    title: "Autospurgo Messina", 
    locationNames: {label: "Messina", href: "messina"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["messina"],
        name: "Messina",
    }),
});
