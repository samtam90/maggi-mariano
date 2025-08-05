import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bevagna",
  canonical: links.servizi["centrifugazione-fanghi"]["bevagna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bevagna",
  locationNames: { label: "Bevagna", href: "bevagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
