import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Sansepolcro",
    canonical: links.autospurgo["sansepolcro"],
});
export default withBaseProps({ 
    title: "Autospurgo Sansepolcro", 
    locationNames: {label: "Sansepolcro", href: "sansepolcro"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
