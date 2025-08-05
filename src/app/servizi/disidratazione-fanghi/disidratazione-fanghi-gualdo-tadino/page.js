import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gualdo Tadino",
  canonical: links.servizi["disidratazione-fanghi"]["gualdo-tadino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gualdo Tadino",
  locationNames: { label: "Gualdo Tadino", href: "gualdo-tadino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
