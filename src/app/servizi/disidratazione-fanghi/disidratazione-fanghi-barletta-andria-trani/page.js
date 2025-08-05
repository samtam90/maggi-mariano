import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Barletta-Andria-Trani",
  canonical: links.servizi["disidratazione-fanghi"]["barletta-andria-trani"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Barletta-Andria-Trani",
  locationNames: { label: "Barletta-Andria-Trani", href: "barletta-andria-trani" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["barletta-andria-trani"],
      name: "Barletta-Andria-Trani",
  }),
});
