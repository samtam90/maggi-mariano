import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Brescia",
    canonical: links.autospurgo["brescia"],
});
export default withBaseProps({ 
    title: "Autospurgo Brescia", 
    locationNames: {label: "Brescia", href: "brescia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["brescia"],
        name: "Brescia",
    }),
});
