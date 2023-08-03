import React, { useState, useEffect } from "react";
import { useNavigation } from "../../../hooks/useNavigation";
import useConstellationApi from "../../../api/useConstellationApi";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Text, OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

const ListSectionStar = () => {
  const { constellationId } = useParams();
  const { navigateToDetailStar } = useNavigation();
  const [starList, setStarList] = useState({
    starList: [],
  });

  useEffect(() => {
    getStarList(constellationId);
  }, [constellationId]);

  const getStarList = async (constellationId) => {
    console.log("consteelationID:", constellationId);
    try {
      const response = await useConstellationApi.constellationsGetConstellation(
        constellationId,
      );
      console.log(" setStarList:", response);
      setStarList(response.resultData);
      console.log(response.resultData);
    } catch (error) {
      console.error("Failed to get star list:", error);
    }
  };

  if (!starList) {
    return <div>Loading...</div>;
  }

  const starlist1 = starList;
  console.log("eeeeeeeeeeeee:", starlist1);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <Canvas camera={{ position: [10, 10, 50] }}>
        <OrbitControls enableDamping dampingFactor={0.05} enabled={true} />
        <axesHelper scale={5} />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
        <color attach="background" args={["black"]} />
        {starlist1?.starList.map((star, index) => (
          <group key={index}>
            <mesh
              position={[
                star.lineList[0],
                2,
                Math.floor(Math.random() * 11) - 5,
              ]}
              onClick={() => navigateToDetailStar(star.starId)}
            >
              <sphereGeometry args={[3, 32, 32]} />
              <meshStandardMaterial
                color="#00ffff"
                emissive="#00ffff"
                // emissive="#fbf59b"
                emissiveIntensity={1}
                // emissiveIntensity={starList.starList[index].brightness}
              />
            </mesh>
            <Text
              position={[1, 2 + 5, 1]}
              color="#ffffff" // Optional: choose the color of the text
              anchorX="center" // Optional: horizontal alignment
              anchorY="middle" // Optional: vertical alignment
              fontSize={500} // Optional: font sizeq
            >
              {star.statId}
            </Text>
          </group>
        ))}
      </Canvas>
      {starList?.starList.map((star) => (
        <div
          key={star.starId}
          onClick={() => navigateToDetailStar(star.starId)}
          className="bg-red-500"
        >
          {star.starId} 아니요 {star.nickname} ㅇㅇㅇ
        </div>
      ))}
    </div>
  );
};

export default ListSectionStar;
