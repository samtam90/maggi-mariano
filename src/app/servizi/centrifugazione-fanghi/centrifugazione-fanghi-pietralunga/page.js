import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Pietralunga",
  canonical: links.servizi["centrifugazione-fanghi"]["pietralunga"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Pietralunga",
  locationNames: { label: "Pietralunga", href: "pietralunga" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
