import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ferrara",
    canonical: links.autospurgo["ferrara"],
});
export default withBaseProps({ 
    title: "Autospurgo Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["ferrara"],
        name: "Ferrara",
    }),
});
