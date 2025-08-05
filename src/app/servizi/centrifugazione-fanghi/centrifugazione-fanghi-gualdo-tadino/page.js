import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gualdo Tadino",
  canonical: links.servizi["centrifugazione-fanghi"]["gualdo-tadino"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gualdo Tadino",
  locationNames: { label: "Gualdo Tadino", href: "gualdo-tadino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
