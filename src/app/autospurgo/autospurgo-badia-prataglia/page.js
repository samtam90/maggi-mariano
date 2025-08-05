import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import appConfig, { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Badia Prataglia",
    canonical: links.autospurgo["badia-prataglia"],
});
export default withBaseProps({ 
    title: "Autospurgo Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"},
    locationsData: getProvinceLocationsData({
        links: appConfig.links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
