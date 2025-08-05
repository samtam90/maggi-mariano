import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Scheggino",
  canonical: links.servizi["centrifugazione-fanghi"]["scheggino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Scheggino",
  locationNames: { label: "Scheggino", href: "scheggino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
