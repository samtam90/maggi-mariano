import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Ragusa",
    canonical: links.autospurgo["ragusa"],
});
export default withBaseProps({ 
    title: "Autospurgo Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["ragusa"],
        name: "Ragusa",
    }),
});
